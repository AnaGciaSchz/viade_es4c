import { NotificationViade } from "../../Model";
import { sparqlFiddle } from "../../../utils";

class RDFToNotification {
  async parse(url) {
    const sparql = `PREFIX terms: <http://purl.org/dc/terms#>
      PREFIX n0: <https://www.w3.org/ns/activitystreams#>
      PREFIX schem: <http://schema.org/>
      PREFIX n1: <https://creativecommons.org/licenses/by-sa/4.0/>
      PREFIX c: <https://christianpelaez98.solid.community/profile/card#>
      PREFIX XML: <http://www.w3.org/2001/XMLSchema#>
      PREFIX ter: <https://www.w3.org/ns/solid/terms#>
      
      SELECT ?title ?license ?actor ?object ?published ?summary ?target ?read
      WHERE {
      ?notification terms:title ?title;
      schem:license ?license;
      n0:actor ?actor;
      n0:object ?object;
      n0:published ?published;
      n0:summary ?summary;
      n0:target ?target;
      ter:read ?read.
      }`;

    let fiddle = {
      data: url,
      query: sparql,
      wanted: "Array"
    };

    const result = await sparqlFiddle.run(fiddle).then(
      results => {
        return results;
      },
      err => console.log(err)
    );
    return this.arrayToNotification(result);
  }

  arrayToNotification = result => {
    return new NotificationViade(
      result[0]["title"],
      result[0]["license"],
      result[0]["actor"],
      result[0]["object"],
      result[0]["published"],
      result[0]["summary"],
      result[0]["target"],
      result[0]["read"]==="true"
    );
  };
}

const parser = new RDFToNotification();

export default parser;
