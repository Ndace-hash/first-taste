import React from "react";
import PostCard from "./PostCard";

const posts = [
    {
        title: "Joe Biden drops out of 2024 presidential race after weeks of pressure from Democrats",
        content: `Meanwhile, Trump and Biden both stressed "unity" in the wake of the assassination attempt on the Republican presidential contender, but any shift to a more civil political discourse is likely to be short-lived.
        For months, the two campaigns have shredded the other's candidate with a ferocity that exceeds the already bruising nature of US political races, and observers say there is little chance of that dynamic being altered in any significant way.`,
        posted_at: "22 July, 2024.",
    },
    {
        title: "Joe Biden drops out of 2024 presidential race after weeks of pressure from Democrats",
        content: `Meanwhile, Trump and Biden both stressed "unity" in the wake of the assassination attempt on the Republican presidential contender, but any shift to a more civil political discourse is likely to be short-lived.
        For months, the two campaigns have shredded the other's candidate with a ferocity that exceeds the already bruising nature of US political races, and observers say there is little chance of that dynamic being altered in any significant way.`,
        posted_at: "22 July, 2024.",
    },
    {
        title: "Joe Biden drops out of 2024 presidential race after weeks of pressure from Democrats",
        content: `Meanwhile, Trump and Biden both stressed "unity" in the wake of the assassination attempt on the Republican presidential contender, but any shift to a more civil political discourse is likely to be short-lived.
        For months, the two campaigns have shredded the other's candidate with a ferocity that exceeds the already bruising nature of US political races, and observers say there is little chance of that dynamic being altered in any significant way.`,
        posted_at: "22 July, 2024.",
    },
    {
        title: "Joe Biden drops out of 2024 presidential race after weeks of pressure from Democrats",
        content: `Meanwhile, Trump and Biden both stressed "unity" in the wake of the assassination attempt on the Republican presidential contender, but any shift to a more civil political discourse is likely to be short-lived.
        For months, the two campaigns have shredded the other's candidate with a ferocity that exceeds the already bruising nature of US political races, and observers say there is little chance of that dynamic being altered in any significant way.`,
        posted_at: "22 July, 2024.",
    },
];

const PostDisplay = () => {
    return (
        <section className="mx-3">
            {posts.map((post, index) => (
                <PostCard
                    post={post}
                    key={`${index}-${post.title
                        .replace(" ", "-")
                        .toLowerCase()}`}
                />
            ))}
        </section>
    );
};

export default PostDisplay;
