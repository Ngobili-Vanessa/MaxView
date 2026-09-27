import "./Dashboard.css";

function Dashboard() {
  const userName = "Wisdom";

  return (
    <div className="dashboard-page">

      <div className="dashboard-container">

        <section className="dashboard-welcome">
          <p className="dashboard-eyebrow">WELCOME BACK</p>

          <h1>
            Welcome back, {userName}!
          </h1>

          <p className="dashboard-subtitle">
            Ready to explore your universe?
          </p>
        </section>

      </div>

    </div>
  );
}

export default Dashboard;