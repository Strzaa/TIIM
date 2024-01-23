FROM openjdk:11

RUN mkdir /app
ADD ./app/build/distributions/app.tar /app
WORKDIR /app/app

# Run the app
CMD ["bin/app"]