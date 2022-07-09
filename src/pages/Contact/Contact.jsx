import React, { useEffect } from "react";
import { Map, PageContainer, PageHeader } from "../../components";
import { useContactContext } from "../../hooks/dataHooks";
import "./contact.scss";

export default function Contact() {
  const { state, getContactData } = useContactContext();

  useEffect(() => {
    const loadData = async () => {
      await getContactData();
    };

    loadData();
  }, []);

  const data = state?.contactDetails?.data;

  const locationObj = {
    latitude: data?.map?.location?.latitude,
    longitude: data?.map?.location?.longitude,
  };

  return (
    <PageContainer>
      <PageHeader title={"contact me"} description={data?.description} />

      <div className="c__grid-container">
        <section>
          <h1>Input Fields</h1>
        </section>
        <section>
          {locationObj.longitude !== undefined &&
          locationObj.latitude !== undefined ? (
            <Map location={locationObj} popup={data?.map?.popup} />
          ) : null}
        </section>
      </div>
    </PageContainer>
  );
}
