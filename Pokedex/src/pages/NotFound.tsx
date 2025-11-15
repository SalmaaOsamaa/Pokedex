import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-muted">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Pokemon not found</p>
        <img 
         src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2wweXQ1bWc4dTA5ZnFzdm00d2VwbG80MGRoOTg4cnIwdmVkd3pmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Y4CQZdm9vzp2LHS3wL/giphy.gif" 
         alt="404" 
         className="w-1/2 h-1/2 object-contain" 
         style={{ maxWidth: '500px', maxHeight: '500px' }}
         />
        <a href="/" className="text-primary border-2 border-primary rounded-md px-4 py-2 hover:text-primary/90">
          Return to Home
        </a>
      </div>
  );
};

export default NotFound;
