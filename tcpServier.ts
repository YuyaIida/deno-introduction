import { copy } from "https://deno.land/std@0.121.0/streams/conversion.ts";

const hostname = "0.0.0.0";
const port = 8080;
const listner = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`)
for await (const conn of listner) {
    copy(conn, conn)
}
