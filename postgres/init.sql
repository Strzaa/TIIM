CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE cars (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    brand VARCHAR(100),
    model VARCHAR(100),
    year INTEGER
);
