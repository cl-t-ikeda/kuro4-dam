rsconf = {
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo:27017", priority: 1.0 }
  ],
};
try {
  rs.initiate(rsconf);
  quit(1);
} catch(e) {
  rs.status().ok;
}