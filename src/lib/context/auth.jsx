import { Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:9090/api/auth/me", {
          credentials: "include",
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unauthorized");
        }

        setUser(data.user);
      } catch (error) {
        console.error(error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:9090/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Invalid credentials");
      }

      setUser(data.user);

      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:9090/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Registration failed");
      }

      setUser(data.user);

      navigate("/", { replace: true });
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Logout failed");
      }

      setUser(null);

      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="animate-spin">
          <Loader2 className="h-10 w-10 text-emerald-700" />
        </span>
      </div>
    );
  }

  if (
    !user &&
    location.pathname !== "/login" &&
    location.pathname !== "/register"
  ) {
    navigate("/login", { replace: true });
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
