import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./routes";
import { PublicLayout } from "./layouts/public-layout";
import ProtectedRoute from "./layouts/protected-route";
import MainLayout from "./layouts/main-layout";
import { Generate } from "./views/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/generate" element={<Generate />}>
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>

      {/* Footer credit */}
      <footer className="text-center py-4 text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} <span className="font-medium">MockMate</span> — crafted by <span className="font-semibold">Shivansh Giri</span>
      </footer>
    </Router>
  );
};
