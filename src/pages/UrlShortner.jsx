import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import api from "../utilities/api";
import CopyToClipboard from "react-copy-to-clipboard";
import validator from "validator";
import { toast } from "react-toastify";
const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [shortnedURL, setShortURL] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  
  const handleChange = (e) => {
    if (e.target.value != "") {
      setUrl(e.target.value);
    }
  };
  // Get shortened URL from server
  const handleSubmit = async () => {
    if (!validator.isURL(url)) {
      return toast.error("Invalid URL");
    }
    try {
      let { data } = await api.post("/api/url-shortner", { url: url });
      if (data?.status) {
        setShortURL(data?.data);
      }
    } catch (error) {
      console.log("error0", error);
    }
  };
  // Reset data
  const handleReset = () => {
    setIsCopied(false);
    setShortURL("");
    setUrl("");
  };
  //timeout for copied message
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  });
  return (
    <div className="container">
      <Row style={{width:"100%"}}>
        <Col md={12}>
          <Card className="card-container">
            <CardBody>
              <Label className="visually-hidden">URL Shortner</Label>
              <InputGroup>
                <Input
                  type="text"
                  name="short-url"
                  placeholder="Enter you URL here"
                  onChange={(e) => handleChange(e)}
                />
                <InputGroupText className="p-0">
                  <Button onClick={handleSubmit}>Shorten it !</Button>
                </InputGroupText>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
        {shortnedURL && (
          <Col md={12} className="my-3">
            <Card className="card-container">
              <CardBody>
                <Label className="visually-hidden">URL Shortner</Label>
                <InputGroup>
                  <Input type="text" readOnly value={shortnedURL} />
                  <InputGroupText className="p-0">
                    <CopyToClipboard
                      text={shortnedURL}
                      onCopy={() => setIsCopied(true)}
                    >
                      <Button className="btn-copy">Copy</Button>
                    </CopyToClipboard>
                  </InputGroupText>
                </InputGroup>
                {isCopied && (
                  <p className="text-primary">Link Copied successfully! </p>
                )}
              </CardBody>
            </Card>
          </Col>
        )}
        {shortnedURL && (
          <Col md={12} className="text-center">
            <Button onClick={handleReset} style={{ width: "auto" }}>
              Reset
            </Button>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default UrlShortner;
