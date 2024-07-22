<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::redirect('/', '/posts', 301);
Route::get('/posts', [PostController::class, 'show']);
