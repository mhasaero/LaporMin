<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class BoxController extends Controller
{
    public function index()
    {
        return Inertia::render('Box/Index', []);  
    }

    public function confirm()
    {
        return Inertia::render('Box/Confirm', []);  
    }
}
