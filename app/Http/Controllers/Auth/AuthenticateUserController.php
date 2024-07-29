<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthenticateUserController extends Controller
{
    //
    public function create(Request $request)
    {
        return inertia('Auth/Login', []);
    }
    public function store(Request $request)
    {
        Auth::attempt(['email' => $request->email, 'password' => $request->password]);
        return redirect('/posts/create');
    }
    public function logout(Request $request)
    {
        Auth::logout();
    }
}
