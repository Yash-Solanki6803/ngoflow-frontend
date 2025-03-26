import { NgoPage } from "@/components";
import { useParams } from "react-router";

export const SingleNgo = () => {
  const { ngoId } = useParams();
  return (
    <>
      <NgoPage />
    </>
  );
};
