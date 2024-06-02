import React from "react";

function Card({username = "Hitesh",post = "Not Assigned Yet"}) {
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVycmFyaXxlbnwwfHwwfHx8MA%3D%3D" alt="" width="384" height="512"></img>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that Ive seen scale
              on large teams. Its easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>
             {username}
            </div>
            <div>
                {post}
            </div>
          </figcaption>
        </div>
      </figure>
    )
}

export default Card