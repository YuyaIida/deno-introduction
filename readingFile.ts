import { copy } from "https://deno.land/std@0.121.0/streams/conversion.ts";

const filenames = Deno.args
console.log(filenames)
for (const filename of filenames) {
    const file = await Deno.open(filename)
    await copy(file, Deno.stdout)
    file.close()
}