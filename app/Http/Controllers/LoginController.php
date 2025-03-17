<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\inertia;

class LoginController extends Controller
{
    public function view()
    {
        return Inertia::render('Login', [
        ]);
    }
}
