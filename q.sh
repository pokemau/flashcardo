#!/bin/bash

if tmux has-session -t flashcardo 2>/dev/null; then
    tmux kill-session -t flashcardo
fi
tmuxinator start
