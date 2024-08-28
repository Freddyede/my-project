const DashboardLoader = () => {
  let response: boolean = false;
  window.onstorage = () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(window.localStorage.token);
    response = window.localStorage.token !== undefined;
  };
  if (window.localStorage.token === undefined) {
    window.location.href = '/';
  }
  return response;
};

export default DashboardLoader;