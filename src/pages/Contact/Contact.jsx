import React, { useEffect } from "react";
import { PageContainer, PageHeader } from "../../components";
import { useContactContext } from "../../hooks/dataHooks";
import "./contact.scss";

export default function Contact() {
  const { state, getContactData } = useContactContext();

  useEffect(() => {
    getContactData();
  }, []);

  const data = state?.contactDetails?.data;

  return (
    <PageContainer>
      <PageHeader title={"contact me"} description={data?.description} />
    </PageContainer>
  );
}
