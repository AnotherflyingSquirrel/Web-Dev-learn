function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        message: "Data fetched successfully!",
        timeStamp: new Date().toISOString(),
      };
      resolve(data);
    }, 2000);
  });
}

async function fetchAndProcessData() {
  try {
    console.log("Processing data...");
    const data = await fetchData();
    console.log("Data:", data);
    // console.log("Processing data...");
    // Process the data here
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Fetch operation completed.");
  }
}

// fetchAndProcessData();

// Promise.all and handling multiple promises

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        message: "Comment data fetched successfully!",
        timeStamp: new Date().toISOString(),
      };
      resolve(data);
    }, 2000);
    // reject(new error("Failed to fetch comment data!"));
  });
}
function fetchBlogData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        message: "Blog Data fetched successfully!",
        timeStamp: new Date().toISOString(),
      };
      resolve(data);
    }, 2000);
    // reject(new error("Failed to fetch comment data!"));
  });
}

async function fetchWebsiteData() {
  try {
    console.log("Processing data...");
    const [commentData, blogData] = await Promise.all([
      fetchCommentData(),
      fetchBlogData(),
    ]);
    // console.log("Processing data...");
    // Process the data here
    console.log("Comment Data:", commentData);
    console.log("Blog Data:", blogData);
    // return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Fetch operation completed.");
  }
}
console.log("Fetching website data...\n\n");
fetchWebsiteData();
