import React, { useEffect } from "react";
import { ContactForm, Map, PageContainer, PageHeader } from "../../components";
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
      <div className="c__grid-container">
        {data?.description && (
          <section>
            <PageHeader
              className="c__full-header"
              title={"contact me"}
              description={data?.description}
            />
            <ContactForm />
          </section>
        )}
        {data?.map && (
          <section>
            {locationObj.longitude !== undefined &&
            locationObj.latitude !== undefined ? (
              <Map location={locationObj} popup={data?.map?.popup} />
            ) : null}
          </section>
        )}
      </div>
    </PageContainer>
  );
}
