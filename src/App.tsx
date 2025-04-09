import { useEffect, useRef } from 'react';

function App() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    var name: string = "Madina";
    console.log(name);

    var age: number = 18;
    age = age + 10;
    console.log(age);

    let input = prompt("Siz dasturchimisiz? (ha/yo'q)");
    let isDeveloper: boolean = input?.toLowerCase() === "ha";

    alert(isDeveloper ? "ha" : "yo'q");

    let favoriteFruits: string[] = ["olma", "banan", "anor"];
    console.log(favoriteFruits);

    let person = {
      name: "Madina",
      age: 20,
      isStudent: true
    };
    console.log(person);
    
  }, []);

  return <></>
}

export default App;
