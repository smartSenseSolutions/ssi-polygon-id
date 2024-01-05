import axios from "axios";
const HostURL = "https://issuer-admin.polygonid.me";
const AUTH = import.meta.env.VITE_AUTH
  ? import.meta.env.VITE_AUTH
  : "Basic dXNlci1hcGk6cGFzc3dvcmQtYXBp";

export const CreateConnection = async () => {
  const response = await axios.get(`${HostURL}/v1/authentication/qrcode`);

  return {
    QRCode: response.data.qrCodeLink,
    SessionId: response.data.sessionID,
  };
};

export const GetSessionDetails = async (sessionId: string) => {
  const response = await axios.get(
    `${HostURL}/v1/authentication/sessions/${sessionId}`,
    {
      headers: {
        authorization: AUTH,
      },
    }
  );
  if (response.status == 200) {
    console.log(response);
    return response.data.connection.userID;
  } else {
    return false;
  }
};

export const SendGovernmentID = async (userID: string) => {
  try {
    const response = await axios.post(
      `${HostURL}/v1/credentials`,
      {
        credentialSchema:
          "ipfs://QmfQhst5Kn3zDP8haepknsPfuTwRzQYdbR6cnDYK7U1Pni",
        credentialSubject: {
          National_Id: "IND0003",
          DOB: 19990101,
          id: userID,
        },
        expiration: null,
        mtProof: false,
        signatureProof: true,
        type: "NationalCard",
      },
      {
        headers: {
          Accept: "application/json",
          authorization: AUTH,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error sending government ID:", error);
  }
};

export const SendEmploymentVC = async (userID: string) => {
  try {
    const response = await axios.post(
      `${HostURL}/v1/credentials`,
      {
        credentialSchema:
          "ipfs://QmVCHRiLmGRXpL1TCzoLCwnUBUZUzrRsicwLLtkSummdJ5",
        credentialSubject: {
          salary: 1000000,
          working_since: 20230501,
          issuance_date: 20231206,
          employee_national_id: "IND001",
          id: userID,
        },
        expiration: null,
        mtProof: false,
        signatureProof: true,
        type: "EmploymentSchema",
      },
      {
        headers: {
          Accept: "application/json",
          authorization: AUTH,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error sending employment vc", error);
  }
};

export const SendLabVC = async (userID: string) => {
  try {
    const response = await axios.post(
      `${HostURL}/v1/credentials`,
      {
        credentialSchema:
          "ipfs://QmYawPmEhp6Qmsyxb56LJkHrgpL1HiPCqb4WhP3VXkCueg",
        credentialSubject: {
          bmi: 2312,
          heart_rate: 8300,
          blood_sugar: 13672,
          blood_report: true,
          id: userID,
        },
        expiration: null,
        mtProof: false,
        signatureProof: true,
        type: "LabSchema",
      },
      {
        headers: {
          Accept: "application/json",
          authorization: AUTH,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error sending lab vc:", error);
  }
};

export const SendInsuranceVC = async (userID: string) => {
  try {
    const response = await axios.post(
      `${HostURL}/v1/credentials`,
      {
        credentialSchema:
          "ipfs://QmbDA7qeACRHWbQpY7ogoQdUkeqP2gkEJj8HmTcXfGRcVK",
        credentialSubject: {
          issurance_amount: 1000000000,
          id: userID,
        },
        expiration: null,
        mtProof: false,
        signatureProof: true,
        type: "InsuranceSchema",
      },
      {
        headers: {
          Accept: "application/json",
          authorization: AUTH,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error sending insurance vc:", error);
  }
};

export const CheckCredentials = async (sessionID: string) => {
  const url = `${HostURL}/v1/credentials/${sessionID}`;
  const headers = {
    Accept: "application/json",
    Authorization: AUTH,
  };

  try {
    const response = await axios.get(url, { headers });
    console.log(response.data);
    return response;
  } catch (error: any) {
    console.error(error);
  }
};

export const fetchGovtQRCode = async (sessionId: string) => {
  const response = await axios.get(
    `http://localhost:4007/verify/govt-auth-qr?sessionId=${sessionId}`,
    {
      headers: {
        authorization: AUTH,
      },
    }
  );
  const data = JSON.stringify(response.data.payload);
  return data;
};

export const fetchInsuranceQR = async (sessionId: string) => {
  const response = await axios.get(
    `http://localhost:4007/verify/insurance-issue-auth-qr?sessionId=${sessionId}`,
    {
      headers: {
        authorization: AUTH,
      },
    }
  );
  const data = JSON.stringify(response.data.payload);
  return data;
};
