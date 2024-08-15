<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    //

    public function show()
    {
        $posts = Post::all();
        return Inertia::render('Home', [
            'posts' => $posts
        ]);
    }

    public function store()
    {
        return Inertia::render('Post/Create');
    }

    public function createPost(Request $request)
    {
        $post = [
            '_token' => $request->session()->token(),
            'title' => $request->title,
            'content' => $request->content
        ];

        Post::create($post);
    }

    public function viewDetail(Request $request)
    {
        $post = Post::find($request->id);
        return Inertia::render('Post/[id]', [
            'post' => $post
        ]);
    }
}
