<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\inertia;

class RegisterController extends Controller
{
    public function view()
    {
        return Inertia::render('Register', [
        ]);
    }
}
