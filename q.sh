#!/bin/bash

if tmux has-session -t flashcardo 2>/dev/null; then
    echo "Ending existing tmux session 'flashcardo'..."
    tmux kill-session -t flashcardo
fi

tmuxinator start
