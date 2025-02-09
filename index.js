import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=37.9792&longitude=23.7166&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"

const weatherData = {
  "Amsterdam" : ["52.3738", "4.8910"],
  "Andorra la Vella" : ["42.5075", "1.5218"],
  "Athens" : ["37.9792", "23.7166"],
  "Belgrade" : ["44.8048", "20.4781"],
  "Berlin" : ["52.5235", "13.4115"],
  "Bern" : ["46.9480", "7.4481"],
  "Bratislava" : ["48.2116", "17.1547"],
  "Brussels" : ["50.8371", "4.3676"],
  "Bucharest" : ["44.4479", "26.0979"],
  "Budapest" : ["47.4984", "19.0408"],
  "Chisinau" : ["47.0167", "28.8497"],
  "Copenhagen" : ["55.6763", "12.5681"],
  "Dublin" : ["53.3441", "-6.2675"],
  "Helsinki" : ["60.1699", "24.9384"],
  "Kiev" : ["50.4422", "30.5367"],
  "Lisbon" : ["38.7072", "-9.1355"],
  "Ljubljana" : ["46.0514", "14.5060"],
  "London" : ["51.5002", "-0.1262"],
  "Luxembourg" : ["49.6100", "6.1296"],
  "Madrid" : ["40.4167", "-3.7033"],
  "Minsk" : ["53.9678", "27.5766"],
  "Monaco" : ["43.7325", "7.4189"],
  "Moscow" : ["55.7558", "37.6176"],
  "Nicosia" : ["35.185566", "33.382275"],
  "Oslo" : ["59.9138", "10.7387"],
  "Paris" : ["48.8567", "2.3510"],
  "Podgorica" : ["42.4602", "19.2595"],
  "Prague" : ["50.0878", "14.4205"],
  "Pristina" : ["42.6740", "21.1788"],
  "Reykjavik" : ["64.1353", "-21.8952"],
  "Riga" : ["56.9465", "24.1049"],
  "Rome" : ["41.8955", "12.4823"],
  "San Marino" : ["43.9424", "12.4578"],
  "Sarajevo" : ["43.8608", "18.4214"],
  "Sofia" : ["42.7105", "23.3238"],
  "Stockholm" : ["59.3328", "18.0645"],
  "Tallinn" : ["59.4389", "24.7545"],
  "Tbilisi" : ["41.697102", "44.773674"],
  "Tirana" : ["41.3317", "19.8172"]
};

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async(req, res) => {
    try {
        const response = await axios.get(API_URL)
        
        const current_data = {
            "town_name" : "Athens",
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }

        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
});

app.post('/', async(req, res) => {
  switch (req.body.town){
    case "Amsterdam":
      try {

        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        

        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }


        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;
    
    case "Andorra la Vella":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

    case "Athens":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Belgrade":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Berlin":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Bern":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Bratislava":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Brussels":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Bucharest":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Budapest":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Chisinau":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Copenhagen":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Dublin":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Helsinki":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Kiev":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Lisbon":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Ljubljana":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "London":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Luxembourg":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Madrid":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Minsk":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Monaco":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Moscow":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Nicosia":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Oslo":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Paris":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Podgorica":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Prague":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Pristina":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Reykjavik":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Riga":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Rome":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "San Marino":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Sarajevo":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Sofia":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Stockholm":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Tallinn":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Tbilisi":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;

      case "Tirana":
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData[req.body.town][0]}&longitude=${weatherData[req.body.town][1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        
        const current_data = {
            "town_name" : req.body.town,
            "temperature" : JSON.stringify(response.data.current.temperature_2m),
            "wind_speed" : JSON.stringify(response.data.current.wind_speed_10m),
            // hourly will contain 6 values that correspond to 00:00, 03:00, 06:00, 09:00 12:00, 15:00, 18:00, 21:00, 23:00
            "hourly" : [JSON.stringify(response.data.hourly.temperature_2m[0]),
                        JSON.stringify(response.data.hourly.temperature_2m[3]),
                        JSON.stringify(response.data.hourly.temperature_2m[6]),
                        JSON.stringify(response.data.hourly.temperature_2m[9]),
                        JSON.stringify(response.data.hourly.temperature_2m[12]),
                        JSON.stringify(response.data.hourly.temperature_2m[15]),
                        JSON.stringify(response.data.hourly.temperature_2m[18]),
                        JSON.stringify(response.data.hourly.temperature_2m[21]),
                        JSON.stringify(response.data.hourly.temperature_2m[23]), ]
        }
        
        res.render("index.ejs", {content : current_data});

      } catch (error) {
        console.error("Failer to make request", error.message);
        res.status(404).send("Failed to fetch whether.")
      }
      break;
  }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });