import { useEffect } from "react";
import { useRouter } from "../node_modules/next/router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return <div></div>;
};

export default Index;
