import React from 'react';
import '../css/imgs.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

var apiKey = "gZw7CA3iEfc0px9LnrcooXXrWHXuZuWjSLfulaye";

function getTodayAPOD() {
    var req = new XMLHttpRequest();

    req.open("GET", "https://api.nasa.gov/planetary/apod?api_key=" + apiKey, true);

    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);

            /* Clears text content of captions */
            document.getElementById("todayCaption1").textContent = "";
            document.getElementById("todayCaption2").textContent = "";
            document.getElementById("todayCaption3").textContent = "";
            document.getElementById("todayCaption4").textContent = "";

            /* Clears img or iframe from todayPhotoDiv */
            var todayPhotoDivNode = document.getElementById("todayPhotoDiv");
            while (todayPhotoDivNode.hasChildNodes() == true) {
                todayPhotoDivNode.removeChild(todayPhotoDivNode.lastChild);
            }

            if (response.media_type == "image") {
                var img = document.createElement("img");
                img.id = "todayPhoto";
                document.getElementById("todayPhotoDiv").appendChild(img);

                if (response.hasOwnProperty("hdurl")) {
                    document.getElementById("todayPhoto").src = response.hdurl;
                }
                else {
                    var photoUrl = document.getElementById("todayPhoto").src = response.url;
                    document.getElementById("todayPhoto").src = response.url;
                }
            }
            else if (response.media_type == "video") {
                var vid = document.createElement("iframe");
                vid.id = "todayVideo";
                document.getElementById("todayPhotoDiv").appendChild(vid);

                document.getElementById("todayVideo").src = response.url;
            }

            document.getElementById("todayCaption1").textContent = response.title;
            document.getElementById("todayCaption2").textContent = response.date;
            document.getElementById("todayCaption3").textContent = "Explanation: " + response.explanation;

            if (response.hasOwnProperty("copyright")) {
                document.getElementById("todayCaption4").textContent = "Copyright: " + response.copyright;
            }
        }
        else {
            console.log("Error in network request: " + req.statusText);
        }
    });

    req.send(null);
}

/* Runs the function */
getTodayAPOD();

function Images() {
    return (
        <div id="body">
            <Container>
                <h1>NASA Astrophotography of The Day</h1>
                <Row>
                    <Col>
                        <Card>
                            <div id="todayPhotoDiv"></div>
                            <Card.Body>
                                <Card.Title id="todayCaption1">
                                    <figcaption id="todayCaption1"></figcaption>
                                </Card.Title>
                                <Card.Text className="photo-desc" id="todayCaption3">
                                    <figcaption id="todayCaption3"></figcaption>
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted" id="todayCaption2">
                                    <figcaption id="todayCaption2"></figcaption>
                                </Card.Subtitle>
                                <a href="javascript:void(0)"><Button variant="primary" className="photo-button">Go somewhere</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <figcaption id="todayCaption4"></figcaption>
        </div>
    )
}

export default Images;