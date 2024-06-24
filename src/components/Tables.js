import React, { useEffect, useState } from "react";

const Tables = () => {
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    setProductsData(response);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.length > 0 &&
            currentPosts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {productsData.length > 0 &&
        Array.from(
          { length: Math.ceil(productsData.length / postsPerPage) },
          (_, index) => (
            <li key={index}>
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          )
        )}
    </div>
  );
};

export default Tables;
