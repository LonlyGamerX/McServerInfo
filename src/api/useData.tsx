import { useEffect, useState } from "react";


export function useData() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const loadData = async () => {
        const url = "https://randomuser.me/api/?page=1&results=50&seed=devdactid";
        const data = await fetch(url);
        const json = await data.json();
        setData(json.results);
      };
      loadData();
    }, []);
    return {
        data
    }
}