<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    // ->withMiddleware(function (Middleware $middleware) {
    //     $middleware->statefulApi();
    //     $middleware->alias([
    //         'no-cache' => \App\Http\Middleware\NoCache::class,
    //     ]);
    //     $middleware->appendToGroup('auth', 'no-cache');
    // })
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->statefulApi();
        $middleware->alias([
            'no-cache' => \App\Http\Middleware\NoCache::class,
            'debug-auth' => \App\Http\Middleware\DebugAuth::class,
        ]);
        $middleware->appendToGroup('auth', 'no-cache');
        $middleware->appendToGroup('auth', 'debug-auth');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
