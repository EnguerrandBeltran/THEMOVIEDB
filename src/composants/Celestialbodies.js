import { useEffect } from "react";

export function Celestialbodies(){

fetch("https://api.le-systeme-solaire.net/rest.php/bodies")
  .then((response) => response.json())
  .then((data) => console.log(data));

    return(
<div>salut</div>
);
}