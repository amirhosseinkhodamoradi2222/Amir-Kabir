import Skeleton from "react-loading-skeleton";
import "../../../node_modules/react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <>
      <Skeleton
        count={20}
        style={{ marginTop: "20px" }}
        width={"100%"}
        height={"100%"}
      />
    </>
  );
}
