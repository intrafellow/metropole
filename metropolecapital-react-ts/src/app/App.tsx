import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />

      {/* === Liquid Glass Toaster === */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "",
          style: {
            background:
              "rgba(40, 40, 55, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 0 20px rgba(91,44,255,0.3), 0 0 60px rgba(78,161,255,0.2)",
            borderRadius: "14px",
            color: "#fff",
            padding: "14px 20px",
            fontWeight: 600,
            fontSize: "15px",
          },
          success: {
            iconTheme: {
              primary: "#6cf1ff",
              secondary: "#1a1a1f",
            },
            style: {
              background:
                "linear-gradient(135deg, rgba(91,44,255,0.65), rgba(78,161,255,0.45))",
              boxShadow:
                "0 0 15px rgba(78,161,255,0.3), 0 0 40px rgba(91,44,255,0.2)",
            },
          },
          error: {
            iconTheme: {
              primary: "#ff6969",
              secondary: "#1a1a1f",
            },
            style: {
              background:
                "linear-gradient(135deg, rgba(255,90,90,0.6), rgba(255,120,120,0.4))",
              boxShadow:
                "0 0 20px rgba(255,90,90,0.25), 0 0 60px rgba(255,120,120,0.15)",
            },
          },
        }}
      />
    </>
  );
}
