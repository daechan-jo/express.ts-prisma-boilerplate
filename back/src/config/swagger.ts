import swaggerAutogenInit from "swagger-autogen";
const swaggerAutogen = swaggerAutogenInit({ openapi: "3.0.0" });

const options = {
    info: {
        title: "swagger-example",
        description: "스웨거 자동 문서화 샘플",
    },
    servers: [
        {
            url: "http://localhost:8000",
        },
    ],
    schemes: ["http"],
    securityDefinitions: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            in: "header",
            bearerFormat: "JWT",
        },
    },
};
const outputFile = "./src/config/swagger-output.json";
const endpointsFiles = ["./src/app.ts"];
swaggerAutogen(outputFile, endpointsFiles, options);
