FROM python:3.7

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . code/
WORKDIR /code

EXPOSE 8000
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]