# dumblr_generator

This directory holds the code for generating a dumblr instance.

This site should live on Dat + Hashbase. Why? Even if the code for the original dumblr instance is not available and has no peers, Hashbase will act as a "super peer".

If you are accessing the site via Beaker Browser, you'll be able to create a dumblr instance. Behind the scenes, creating a dumblr instance means forking an existing dumblr instance. The base dumblr instance is being created under `dumblr_template`. The original dumblr instance should also be hosted on Hashbase.

We don't necessary have to fork an existing dumblr site. We could instead write files directly to a new dumblr instance. Technically, this is not much harder. I think the main consideration needs to be how we update existing dumblrs. What happens if we have breaking changes to our data structure? For whatever reason, this makes me believe that we should be using the forking method, rather than directly writing files. I can see a future where we version the site behind the scenes, keep old APIs alive and working, but use new content in the new data structure.
