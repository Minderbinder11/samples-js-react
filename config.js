// config.js

module.exports = {
    oidc: {
      oktaUrl: "https://dev-477147.oktapreview.com",
      clientId: "cEBoZvS44tkt5R5VL7pX",
      clientSecret: "M3_PuCqN1hWdjAvWMSkUTEqaaasJzwNTadbj4HvV",
      redirectUri: "http://localhost:8000/authorization-code/callback"
    },
    server: {
      staticDir: "dist",
      startSignal: "webpack: Compiled successfully",
      port: 8000,
      useWebpackDevServer: true
    },

}