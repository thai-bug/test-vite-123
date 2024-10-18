import { RoutesState } from "@/states/route.state";
// import { IconHome } from "@douyinfe/semi-icons";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

function HomePage() {
  const setRoutesPath = useSetRecoilState(RoutesState);

  useEffect(() => {
    setRoutesPath([
      {
        path: "/",
        name: "Home",
        // icon: <IconHome />,
      },
    ]);
  }, []);

  return <>Home</>;
}

export default HomePage;
