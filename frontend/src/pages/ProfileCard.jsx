import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import "./ProfileCard.css";

const ProfileCard = () => {
  const navigate = useNavigate();
  const { signOut, user, supabase } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  // Load user data immediately from auth metadata, try database in background
  useEffect(() => {
    if (!user) return;

    // Use auth metadata immediately - no loading state
    const fallbackData = {
      id: user.id,
      full_name: user.user_metadata?.full_name || "",
      email: user.user_metadata?.email || user.email || "",
      role: user.user_metadata?.role || "student",
      department: user.user_metadata?.department || "",
      batch_year: user.user_metadata?.batch_year || null,
      phone: null,
      created_at: user.created_at,
    };

    setUserData(fallbackData);
    setEditData({
      full_name: fallbackData.full_name,
      email: fallbackData.email,
      phone: fallbackData.phone || "",
    });
    setLoading(false);

    // Try to fetch from database in background (don't wait for it)
    const fetchFromDatabase = async () => {
      try {
        const { data: dbUserData, error: dbError } = await supabase
          .from("users")
          .select("*")
          .eq("id", user.id)
          .single();

        if (dbUserData && !dbError) {
          // Update with database data if successful
          setUserData(dbUserData);
          setEditData({
            full_name: dbUserData.full_name || "",
            email: dbUserData.email || "",
            phone: dbUserData.phone || "",
          });
        }
      } catch (error) {
        // Silently fail - we already have auth data
        console.error("Background database fetch failed:", error);
      }
    };

    fetchFromDatabase();
  }, [user, supabase]);

  const handleClose = () => {
    navigate("/home");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase
        .from("users")
        .update({
          full_name: editData.full_name,
          phone: editData.phone,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) {
        console.error("Error updating user:", error);
        setError(`Failed to update profile: ${error.message}`);
        return;
      }

      // Update local state
      setUserData((prev) => ({
        ...prev,
        full_name: editData.full_name,
        phone: editData.phone,
      }));

      setIsEditing(false);
    } catch (err) {
      console.error("Save error:", err);
      setError(`Failed to update profile: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (userData) {
      setEditData({
        full_name: userData.full_name || "",
        email: userData.email || "",
        phone: userData.phone || "",
      });
    }
    setIsEditing(false);
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await signOut();

      if (result.success) {
        setUserData(null);
        setEditData({ full_name: "", email: "", phone: "" });
        navigate("/login", { replace: true });
      } else {
        setError(`Failed to sign out: ${result.error}`);
      }
    } catch (error) {
      console.error("Sign out error:", error);
      setError(`Failed to sign out: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getAcademicYear = () => {
    if (!userData?.batch_year) return "Not specified";

    const currentYear = new Date().getFullYear();
    const batchYear = parseInt(userData.batch_year);
    const yearDiff = batchYear - currentYear;

    if (yearDiff <= 0) return "Graduate";
    if (yearDiff === 1) return "4th Year";
    if (yearDiff === 2) return "3rd Year";
    if (yearDiff === 3) return "2nd Year";
    if (yearDiff === 4) return "1st Year";
    return `${yearDiff}th Year`;
  };

  const formatMemberSince = () => {
    if (!userData?.created_at) return "Unknown";

    const date = new Date(userData.created_at);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  const getInitials = () => {
    if (!userData?.full_name) return "U";
    return userData.full_name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="profile-overlay">
        <div className="profile-card">
          <div className="loading-spinner">
            <p>Loading profile...</p>
            <button onClick={handleClose} className="close-btn">
              ×
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="profile-overlay">
        <div className="profile-card">
          <div className="error-message">
            <p>Failed to load profile data</p>
            <button onClick={handleClose} className="close-btn">
              ×
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-overlay">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image">
            {userData.profile_picture_url ? (
              <img
                src={userData.profile_picture_url}
                alt="Profile"
                className="profile-img"
              />
            ) : (
              <div className="avatar-placeholder">{getInitials()}</div>
            )}
            <div className="online-indicator"></div>
          </div>

          <div className="profile-info">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editData.full_name}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      full_name: e.target.value,
                    }))
                  }
                  className="edit-input"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  value={editData.email}
                  className="edit-input"
                  disabled
                  title="Email cannot be changed"
                />
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={(e) =>
                    setEditData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="edit-input"
                  placeholder="Phone Number"
                />
                <div className="button-group">
                  <button
                    className="edit-btn"
                    onClick={handleSave}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2>{userData.full_name || "User"}</h2>
                <p>{userData.email}</p>
                <div className="status-badge">
                  <span className="status-dot"></span>
                  Active {userData.role === "student" ? "Student" : "Member"}
                </div>
                <div className="button-group">
                  <button className="edit-btn" onClick={handleEdit}>
                    Edit
                  </button>
                  <button
                    className="signout-btn"
                    onClick={handleSignOut}
                    disabled={loading}
                  >
                    {loading ? "Signing out..." : "Sign Out"}
                  </button>
                </div>
              </>
            )}
          </div>

          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
        </div>

        {error && (
          <div className="error-message" style={{ margin: "10px 0" }}>
            {error}
            <button
              onClick={() => setError(null)}
              style={{
                marginLeft: "10px",
                padding: "2px 6px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="quick-stats">
          <div className="stat-item">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <span className="stat-number">-</span>
              <span className="stat-label">Events Attended</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <span className="stat-number">-</span>
              <span className="stat-label">Attendance Rate</span>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-row">
            <div className="detail-box">
              <div className="detail-icon">🎓</div>
              <div className="detail-content">
                <span className="detail-label">Department</span>
                <span className="detail-value">
                  {userData.department || "Not specified"}
                </span>
              </div>
            </div>
            <div className="detail-box">
              <div className="detail-icon">📅</div>
              <div className="detail-content">
                <span className="detail-label">Academic Year</span>
                <span className="detail-value">{getAcademicYear()}</span>
              </div>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-box">
              <div className="detail-icon">📱</div>
              <div className="detail-content">
                <span className="detail-label">Phone</span>
                <span className="detail-value">
                  {userData.phone || "Not provided"}
                </span>
              </div>
            </div>
            <div className="detail-box">
              <div className="detail-icon">📍</div>
              <div className="detail-content">
                <span className="detail-label">Member Since</span>
                <span className="detail-value">{formatMemberSince()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
