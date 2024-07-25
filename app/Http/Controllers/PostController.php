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
        $user = ['firstName' => 'Zaccheaus', 'lastName' => 'Yisa'];
        return Inertia::render('Home', [
            'user' => $user
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
}
