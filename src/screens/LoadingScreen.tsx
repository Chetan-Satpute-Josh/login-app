import CircularProgress from "@mui/material/CircularProgress";

function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  );
}

export default LoadingScreen;
