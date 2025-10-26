import { useParams } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";

function SimplePage({ title }: { title: string }) {
  const { id } = useParams();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1, padding: "80px 40px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "2rem", fontWeight: 700 }}>
          {title}
        </h1>
        <div style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "#666" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Этот раздел находится в разработке. Мы работаем над добавлением контента для данной страницы.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Если у вас есть вопросы, пожалуйста, свяжитесь с нами через{" "}
            <a href="/contact" style={{ color: "#8B5CF6", textDecoration: "underline" }}>
              форму обратной связи
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SimplePage;


