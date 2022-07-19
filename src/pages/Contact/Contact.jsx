import React, { useEffect } from "react";
import {
  ContactForm,
  Map,
  PageContainer,
  PageHeader,
  ResponseMsg,
} from "../../components";
import { useContactContext } from "../../hooks/dataHooks";
import "./contact.scss";

export default function Contact() {
  const { state, getContactData, setResponseMessage } = useContactContext();

  useEffect(() => {
    const loadData = async () => {
      await getContactData();
    };

    loadData();

    console.log("useEffect: ", state?.responseMessage);
    if (state?.responseMessage?.value !== "") {
      setTimeout(() => {
        setResponseMessage();
      }, 5000);
    }

    console.log(state?.responseMessage)
  }, [state?.responseMessage]);

  const data = state?.contactDetails?.data;
  const responseMsg = state?.responseMessage;

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
      {Object.keys(responseMsg).length > 0 && (
        <ResponseMsg message={responseMsg.msg} status={responseMsg.status} />
      )}
    </PageContainer>
  );
}
