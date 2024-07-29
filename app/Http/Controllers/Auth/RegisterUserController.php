<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterUserController extends Controller
{
    public function create()
    {
        return inertia('Auth/Register', []);
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'unique:' . User::class],
            'password' => ['required', 'min:8'],
            'username' => ['required', 'string', 'unique:' . User::class],
        ]);
        $newUser = [
            '_token' => $request->session()->token(),
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'username' => $request->username,
        ];
        $user = User::create($newUser);
        Auth::login($user);
        return redirect('/');
    }


}
