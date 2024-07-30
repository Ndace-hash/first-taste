<?php

use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Auth\AuthenticateUserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::redirect('/', '/posts', 301);
Route::get('/posts', [PostController::class, 'show'])->name('posts.show');

Route::get('/auth/register', [RegisterUserController::class, 'create'])->name('auth.create');
Route::post('/auth/register', [RegisterUserController::class, 'store'])->name('auth.register');
Route::get('/auth/login', [AuthenticateUserController::class, 'create']);
Route::post('/auth/login', [AuthenticateUserController::class, 'store']);

Route::get('/posts/create', [PostController::class, 'store'])->name('posts.create');
Route::post('/posts/create', [PostController::class, 'createPost'])->name('posts.store');
Route::get('/auth/logout', [AuthenticateUserController::class, 'logout']);
Route::middleware(['auth'])->group(function () {
});
