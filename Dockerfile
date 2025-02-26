FROM --platform=linux/arm64 node:20.13.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --no-audit --legacy-peer-deps
COPY . .
RUN npm run build 
RUN if [ ! -f "dist/main.js" ]; then       echo "ERROR: File 'dist/main.js' not found." >&2;       echo "Please ensure the entry file exists or adjust the path according to your 'nest-cli.json' configuration." >&2;       echo "Expected default entry files are:" >&2;       echo "  - dist/main.js" >&2;       echo "  - dist/apps/<name>/main.js" >&2;       echo "If you are using a custom entry file, use the '--entry-file' flag to specify it, or use a custom 'Dockerfile' (--dockerfile flag)." >&2;       exit 1;     fi
CMD [ "node", "dist/main" ]