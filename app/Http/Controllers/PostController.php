<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
